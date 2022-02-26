import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Checkbox, FormControl, FormControlLabel, InputLabel, Typography } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { MenuItem } from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles/FormStyles';
import { LanguageContext } from './context/LanguageContext';

const words = {
    english: {
        signIn: "Sign In",
        email: "Email",
        password: "Password",
        remember: "Remember me"
    },
    french: {
        signIn: "Se Connecter",
        email: "Adresse Electronique",
        password: "Mot De Passe",
        remember: "Souviens-toi De Moi"
    },
    spanish: {
        signIn: "Registrarse",
        email: "Correo Electronico",
        password: "Contrasena",
        remember: "Recuerdame"
    }
};

function Form(props) {
    const { language, setLanguage } = useContext(LanguageContext)
    const {classes} = props;
    const { signIn, email, password, remember } = words[language];

    return (
        <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant='h5'>{signIn}</Typography>
                    <Select value={language} onChange={setLanguage}>
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>{email}</InputLabel>
                            <Input id='email' name='email' autoFocus></Input>
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>{password}</InputLabel>
                            <Input id='password' name='password' autoFocus></Input>
                        </FormControl>
                        <FormControlLabel control={<Checkbox color='primary' />} label={remember}></FormControlLabel>
                        <Button variant="container" type="submit" fullWidth color='primary' className={classes.submit}>{signIn}</Button>
                    </form>
                </Paper>
            </main>
    )
}


// class Form extends Component {
//     static contextType = LanguageContext;
//     render() {
//         const { language, setLanguage } = this.context;
//         const {classes} = this.props;
//         const { signIn, email, password, remember } = words[language];
//         return (
//             <main className={classes.main}>
//                 <Paper className={classes.paper}>
//                     <Avatar className={classes.avatar}>
//                         <LockOutlined />
//                     </Avatar>
//                     <Typography variant='h5'>{signIn}</Typography>
//                     <Select value={language} onChange={setLanguage}>
//                         <MenuItem value="english">English</MenuItem>
//                         <MenuItem value="spanish">Spanish</MenuItem>
//                         <MenuItem value="french">French</MenuItem>
//                     </Select>
//                     <form className={classes.form}>
//                         <FormControl margin='normal' required fullWidth>
//                             <InputLabel htmlFor='email'>{email}</InputLabel>
//                             <Input id='email' name='email' autoFocus></Input>
//                         </FormControl>
//                         <FormControl margin='normal' required fullWidth>
//                             <InputLabel htmlFor='password'>{password}</InputLabel>
//                             <Input id='password' name='password' autoFocus></Input>
//                         </FormControl>
//                         <FormControlLabel control={<Checkbox color='primary' />} label={remember}></FormControlLabel>
//                         <Button variant="container" type="submit" fullWidth color='primary' className={classes.submit}>{signIn}</Button>
//                     </form>
//                 </Paper>
//             </main>
//         )
//     }
// }


export default withStyles(styles)(Form);