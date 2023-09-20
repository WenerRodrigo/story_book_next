import Button from "../src/components/Button/Button";
import ThemeProvider from "../src/theme/ThemeProvider";


export default function HomeScreen() {
    return (
        <ThemeProvider>
            <div>
                <h1>Bem vindo</h1>
                <Button variant='accent'>
                    Botao
                </Button>
            </div>
        </ThemeProvider>
    )
}