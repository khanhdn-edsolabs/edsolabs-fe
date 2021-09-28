import React from "react";
import "./CityInput.css";

export default class CityInput extends React.Component {
  render(props) {
    const onKlickHandler = async (e) => {
      e.persist();
      const eventKey = e.which ? e.which : e.keyCode;
      const city = e.target.value;

      // Kiểm tra xem đầu vào nhấn Enter
      if (eventKey === 13) {
        if (/^[a-zA]+$/.test(city)) {
          e.target.classList.add("loading");

          if (await this.props.makeApiCall(city))
            e.target.placeholder = "Nhập tên thành phố tìm kiếm...";
          else e.target.placeholder = "Không tồn tại thành phố tìm kiếm...";
        } else e.target.placeholder = "Nhập tên thành phố hợp lệ...";
        e.target.classList.remove("loading");
        e.target.value = "";
      }
    };

    const style = {
      top: this.props.city ? "-130px" : "-120px",
      width: "500px",
      display: "inline-block",
      padding: "8px 0px 8px 30px",
      position: "relative",
      borderRadius: "20px",
      outline: "none",
      fontSize: "16px",
      transition: "all 0.5s ease-out",
    };

    return (
      <input
        className="city-input"
        style={style}
        type="text"
        placeholder="Nhập tên thành phố bạn muốn tìm kiếm..."
        onKeyPress={onKlickHandler}
      />
    );
  }
}
