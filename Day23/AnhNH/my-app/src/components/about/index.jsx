import React, { useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "white",
        border: '1px solid #000',
        alignItems: "center",
        overflow: "auto",

    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        border: '1px solid #000',
        margin: "0px",
        padding: "0px 10px",
        fontWeight: "bold",
    },
    CloseIcon: {
        "&:hover": {
            color: "red",
            cursor: "pointer",
        }
    },
    avatar: {
        width: "60%",
        // Height:"500px",
        display: "block",
        borderRadius: "20px",
        margin: "auto",
        cursor: "pointer",

    },
    content: {
        padding: "20px",
        position: "relative",
    },
    span: {
        color: "blue"
    },
    close: {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "red",
        color: "white",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "white",
            border: '1px solid red',
            color: "red",
        }
    },
    textAlign: {
        textAlign: "justify"
    },
    "@media screen and (max-width:1024px)": {
        paper: {
            height: "500px",
        }
    },
    colLeft: {
        textAlign: "center"
    }
}));
function Aboutme(props) {
    const [status, setstatus] = useState(false)
    const [text, settext] = useState("sao muốn nhìn ảnh tui lắm ờ, thế click ảnh đi bất ngờ đó 👆")
    const [value, setvalue] = useState("https://memedaily.vn/storage/meme/8abc07720f36d63cccbe58f6aa316beemeo-trang-ngo-ngac-voi-dau-hoi.jpg")
    const onClicks = () => {
        if (status === true) {
            setvalue("https://memedaily.vn/storage/meme/8abc07720f36d63cccbe58f6aa316beemeo-trang-ngo-ngac-voi-dau-hoi.jpg")
            setstatus(false)
            settext("sao muốn nhìn ảnh tui lắm ờ,thế click ảnh đi bất ngờ đó 👆")
        }
        else {
            setvalue("https://trainghiemsong.vn/wp-content/uploads/2021/07/1-822.jpeg")
            setstatus(true)
            settext("nạp tài khoản vip ngay nha 😡")
        }
    }
    const classes = useStyles();
    const closePopUP = () => {
        props.onCloses()
    }
    return (
        <Container maxWidth="lg">
            <Grid container className={classes.paper} id="roooot">
                <Grid item lg={12} xs={12}>
                    <p className={classes.title}>
                        <label>About Me</label>
                        <CloseIcon onClick={() => closePopUP()} className={classes.CloseIcon} />
                    </p>
                </Grid>
                <Grid item lg={5} xs={12} className={classes.colLeft}>
                    <img className={classes.avatar} src={value} alt="" onClick={onClicks} />
                    <h4>{text}</h4>
                </Grid>
                <Grid item lg={7} xs={12} className={classes.content}>
                    <h1>Hi!</h1>
                    <h3>Một chút về tui nha</h3>
                    <p>Tên: ánh</p>
                    <p>InGame: NguyenAnh</p>
                    <p>Hiện tại đang sinh sống và làm việc tại hà nội</p>
                    <p className={classes.textAlign}>Sở thích: uống coca vào mỗi buổi chiều, nuôi mèo và chó (<span className={classes.span}>nhưng do hiện tại chưa có điều kiện và dịch bệnh kéo dài , nên tui không thể mua được cả con và chỉ có thể mua theo từng cân ^^</span>)</p>
                    <p>Ước mơ : ???</p>
                    <p className={classes.textAlign}>hiện tại tôi đang làm phần ơ bao mi này cũng là 1:09 AM 9/12/2021, thì tôi sắp rơi vào trang thái bất tỉnh nhân sự trong vài tiếng sắp tới nên chắc là phần này cũng chỉ nên đến đây thôi nhé các bạn (<span className={classes.span}>Mà đúng hơn là tôi đang có tí cồn trong máu do hồi chiều có đi dẹp loạn mấy con mực</span>)</p>
                    <p className={classes.textAlign}>Tuổi:????|Quê:???|Trạng thái bản thân đang là <span className={classes.span}>true</span> hay <span className={classes.span}>false</span> với cô đơn thì hãy <a href="https://www.facebook.com/nguyenanh.16092000" target="_blank">click vào đây nha</a> để được biết thêm thông tin</p>
                    <span onClick={() => closePopUP()} className={classes.close}>close</span>
                </Grid>
            </Grid>
        </Container>

    );
}

export default Aboutme;
