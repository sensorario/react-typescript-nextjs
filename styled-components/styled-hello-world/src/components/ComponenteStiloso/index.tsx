import { Wrapper } from "./style";

type Props = {
  titolo: string;
  content: string;
};

const ComponenteStiloso = ({ titolo, content }: Props) => {
  return (
    <Wrapper>
      <div className="stilosissimo">
        <div className="title">
          <h3>{titolo}</h3>
        </div>
        <div className="content">{content}</div>
      </div>
    </Wrapper>
  );
};

export default ComponenteStiloso;
