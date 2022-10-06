import PropTypes from "prop-types";

function FunctionComponent(props) {
  let { title, name } = props; // 객체 구조 분해 할당

  return (
    <>
      <div>{title}를 배워봅시다!</div>
      <div>
        {name}이 {title}를 배운다!
      </div>
      <div>{props.children}</div>
    </>
  );
}

// 부모 컴포넌트에서 받아올 props 가 없을 때 쓰이는 props
FunctionComponent.defaultProps = {
  title: "오잉",
  name: "홍길동",
};

FunctionComponent.propTypes = {
  title: PropTypes.string,
};

export default FunctionComponent;
