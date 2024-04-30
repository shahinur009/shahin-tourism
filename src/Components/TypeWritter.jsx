import { useTypewriter, Cursor } from "react-simple-typewriter";
const TypeWritter = () => {
    const [typeEffect] = useTypewriter({
        words: ['Shahin Tourism', 'World Best Tourism Experience', 'Contact us +8801744-604009'],
        loop: {},
        typeSpeed: 100,
        delaySpeed: 40,
    })
    return (
        <>
            <typeEffect></typeEffect>
        </>
    );
};

export default TypeWritter;