function Test3(props) {
  return (
    <>
      {props.food == "김치찜" ? (
        <div>
          <span style={{ color: "red" }}>{props.food}</span>은 대중적인 한국
          요리 중 하나로, 배추김치를 기본으로 하여 동물성 재료와 파, 마늘 등의
          향신료와 함께 오랜시간 뭉근하게 익혀내는 찜 요리이다.
        </div>
      ) : (
        <div>
          <span style={{ color: "red" }}>{props.food}</span>
        </div>
      )}
    </>
  );
}

Test3.defaultProps = {
  food: "김밥",
};
export default Test3;
