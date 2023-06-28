import "./style.css";

export interface FeatureListRightProps {
  title?: string;
  description?: string;
  item1?: string;
  item2?: string;
  item3?: string;
}


export const initialProps: FeatureListRightProps = {
  title: "Title",
  description: "description",
  item1: "item1",
  item2: "item2",
  item3: "string"
}

export const FeatureListRight = ({ title, description, item1, item2, item3 }: FeatureListRightProps) => {
  return (
    <div className="feature-list-right">
      <div className="media" />
      <div className="content">
        <p className="subtitle">
        {`${description}`}
        </p>
        <div className="title">{`${title}`}</div>
        <div className="list">
          <div className="list-item">
            <div className="list-item-text">{`${item1}`}</div>
            <div className="ellipse" />
          </div>
          <div className="div">
            <div className="text-wrapper">{`${item2}`}</div>
            <div className="ellipse-2" />
          </div>
          <div className="list-item-2">
            <div className="list-item-text-2">{`${item3}`}</div>
            <div className="ellipse-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureListRight;



