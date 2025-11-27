import React, { useState } from "react";
import PrevButton from "../components/PrevButton";
import InfoInput from "../components/InfoInput";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Info = () => {
  // logic

  // TODO: set함수 추가하기
  const [ingredientList, setIngredientList] = useState([]); // 사용자가 입력할 재료 목록

  const addIngredient = () => {
    //console.log("재료 추가하기");
    // 기본 데이터 추가
    const id = Date.now();
    const newItem = {
      // 객체 추가시 고유한 ID값 필요
      id: id, //키값과 밸류값 같으면 축약 가능 =>id: id
      label: `ingredient_${id}`,
      text: "재료명", //ui에 볼여줄 타이틀
      value: "",
    };

    //기존 배렬에 객체 추가
    setIngredientList([...ingredientList, newItem]);
  };

  const history = useNavigate();

  const handleRemove = (selectedId) => {
    console.log("🚀 ~ handleRemove ~ sekectedUd:", selectedId);
    const filterIngredientList = ingredientList.filter(
      (item) => item.id !== selectedId
    );
    setIngredientList(filterIngredientList);
  };

  const handleNext = () => {
    // console.log("chat페이지로 이동");
    history("/chat");
  };

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-104"></i>
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* TODO:Title 컴포넌트 */}
        <div className="px-2 pt-6">
          <h1 className="text-4.5xl font-black text-white">
            당신의 냉장고를 알려주세요
          </h1>
        </div>
        {/* // TODO:Title 컴포넌트 */}

        {/* START:form 영역 */}
        <div className="mt-20 overflow-auto">
          <form>
            {/* START:input 영역 */}
            <div>
              {ingredientList.map((item) => (
                <InfoInput
                  key={item.id}
                  content={item}
                  onRemove={handleRemove}
                />
              ))}
            </div>
            {/* END:input 영역 */}
          </form>
        </div>
        {/* END:form 영역 */}
        {/* START:Add button 영역 */}
        <AddButton onClick={addIngredient} />
        {/* END:Add button 영역 */}
        {/* START:Button 영역 */}
        <Button text="Next" color="bg-chef-green-500" onClick={handleNext} />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Info;
