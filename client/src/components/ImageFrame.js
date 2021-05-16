import Container from '@material-ui/core/Container';

function ImageFrame(props) {
    return (
        <Container>
            <img alt="main" className="main-img" src={props.file} />
        </Container>
    );
}

export default ImageFrame;