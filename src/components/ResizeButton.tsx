import "../resizeButton.css";

interface ResizeButtonProps {
  /*  */
  text: string;
}

export const initialProps: ResizeButtonProps = {
    text: "This Button Resizes",
};

 const ResizeButton = ({ text }: ResizeButtonProps) => {
  return (
    <div className={`resize-button`}>
      <div className="sign-up">{text}</div>
    </div>
  );
};

export default ResizeButton;