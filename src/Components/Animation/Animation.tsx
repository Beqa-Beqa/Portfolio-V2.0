import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { CSSProperties, useRef } from "react";

const Animation = (props: {
    animationData: Record<string, any>;
    className?: string
    style?: CSSProperties
}) => {
    const animationRef = useRef<LottieRefCurrentProps>(null);

    return (
        <div style={props.style} className={props.className}>
            <Lottie lottieRef={animationRef} animationData={props.animationData} />
        </div>
    );
}
 
export default Animation;