import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props){
    const [language, setLanguage] = useState("spanish");

    const changeLanguage = (e) => {
        setLanguage(e.target.value);
    }

    return(
        <LanguageContext.Provider value={{language, setLanguage: changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    );
}

// export class LanguageProvider extends Component {
//     constructor(props){
//         super(props);
//         this.state = { language: "french" };
//         this.changeLanguage = this.changeLanguage.bind(this)
//     }
//     changeLanguage(e){
//         this.setState({language: e.target.value})
//     }
//     render() {
//         return (
//             <LanguageContext.Provider value={{...this.state, setLanguage: this.changeLanguage}}>
//                 {this.props.children}
//             </LanguageContext.Provider>
//         )
//     }
// }


// creating HIGHER ORDER COMPONENT
// returns a component with all the original props and adds a prop called languageContext takes a value from consumer and pass it in as a value of this prop

// export const withLanguageContext = Component => props => {
//     <LanguageContext.Consumer>
//         {value => <Component languageContext={value} {...props} />}
//     </LanguageContext.Consumer>
// }

// export const withLanguageContext = (Component) => {
// 	return (props) => {
//         return (
//             <LanguageContext.Consumer>
//                  {(value) => <Component languageContext={value} {...props} />}			
//             </LanguageContext.Consumer>
//         );
//     };
// };