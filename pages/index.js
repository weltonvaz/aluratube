import config from "../config.json"

function HomePage() {
    //const mensagem = "Bem vindo ao AluraTube!";
    const estilosDaHomePage = { backgroundColor: "red" };
    return (
        <div style={estilosDaHomePage}>
            <Menu></Menu>
            <Header></Header>
            <TimeLine></TimeLine>
        </div>
    );
}

export default HomePage

function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            
            <section className="user-info"    
                <img scr={"https://github.com/${config.github}.png"} />
                {config.name}
                {config.job}
            
        </StyledHeader>
    )
}
function TimeLine() {
    return (
        <div>
            TimeLine
        </div>
    )
}