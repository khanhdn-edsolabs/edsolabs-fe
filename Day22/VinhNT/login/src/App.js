import maskGroup from './assests/Mask Group.png';
import user from './assests/user.png';
import key from './assests/key.png';
import './App.css';

function App() {
  return (
    <div className="l-container bg-sign-in">
      <div className="l-header header font-display">
        <div className="header__status">
          <div className="header__status__time">
            <span>9:41</span>
          </div>
          <div className="header__status__icons">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.2399 0.666687H17.1359C16.5262 0.666687 16.032 1.1144 16.032 1.66669V10.3334C16.032 10.8856 16.5262 11.3334 17.1359 11.3334H18.2399C18.8497 11.3334 19.3439 10.8856 19.3439 10.3334V1.66669C19.3439 1.1144 18.8497 0.666687 18.2399 0.666687ZM11.9839 3.00002H13.088C13.6977 3.00002 14.192 3.44774 14.192 4.00002V10.3334C14.192 10.8856 13.6977 11.3334 13.088 11.3334H11.9839C11.3742 11.3334 10.8799 10.8856 10.8799 10.3334V4.00002C10.8799 3.44774 11.3742 3.00002 11.9839 3.00002ZM7.93594 5.33335H6.83194C6.22222 5.33335 5.72794 5.78107 5.72794 6.33335V10.3334C5.72794 10.8856 6.22222 11.3334 6.83194 11.3334H7.93594C8.54567 11.3334 9.03995 10.8856 9.03995 10.3334V6.33335C9.03995 5.78107 8.54567 5.33335 7.93594 5.33335ZM2.78394 7.33335H1.67993C1.07021 7.33335 0.575928 7.78107 0.575928 8.33335V10.3334C0.575928 10.8856 1.07021 11.3334 1.67993 11.3334H2.78394C3.39366 11.3334 3.88794 10.8856 3.88794 10.3334V8.33335C3.88794 7.78107 3.39366 7.33335 2.78394 7.33335Z" fill="white"/>
            </svg>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.32845 2.61517C11.7846 2.61526 14.1467 3.46937 15.9268 5.00097C16.0608 5.11921 16.2751 5.11772 16.4071 4.99762L17.6884 3.82729C17.7552 3.76638 17.7925 3.68387 17.792 3.59802C17.7914 3.51217 17.7531 3.43006 17.6854 3.36986C13.0134 -0.682369 5.64275 -0.682369 0.970722 3.36986C0.903045 3.43002 0.864645 3.5121 0.864021 3.59795C0.863397 3.6838 0.9006 3.76634 0.967397 3.82729L2.24908 4.99762C2.38101 5.1179 2.59543 5.11939 2.72939 5.00097C4.50965 3.46927 6.87211 2.61516 9.32845 2.61517ZM9.32845 6.42275C10.6779 6.42267 11.9792 6.87663 12.9795 7.6964C13.1148 7.81275 13.3279 7.81023 13.4598 7.69072L14.7397 6.52039C14.8071 6.459 14.8445 6.37572 14.8435 6.28919C14.8425 6.20265 14.8033 6.12008 14.7345 6.05995C11.6884 3.49554 6.9711 3.49554 3.92499 6.05995C3.85619 6.12008 3.81693 6.20269 3.81603 6.28926C3.81512 6.37582 3.85265 6.45909 3.92019 6.52039L5.19965 7.69072C5.33154 7.81023 5.54467 7.81275 5.67996 7.6964C6.6796 6.87717 7.97987 6.42326 9.32845 6.42275ZM11.8922 8.98459C11.8941 9.07136 11.8564 9.15503 11.788 9.21583L9.57415 11.2378C9.50925 11.2972 9.42077 11.3307 9.32845 11.3307C9.23613 11.3307 9.14765 11.2972 9.08276 11.2378L6.86854 9.21583C6.80014 9.15498 6.76252 9.07129 6.76454 8.98451C6.76657 8.89773 6.80808 8.81556 6.87926 8.75739C8.2931 7.67512 10.3638 7.67512 11.7776 8.75739C11.8488 8.81561 11.8902 8.89781 11.8922 8.98459Z" fill="white"/>
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.35" x="0.833252" y="0.833313" width="21" height="10.3333" rx="2.16667" stroke="white"/>
              <path opacity="0.4" d="M23.3333 4V8C24.138 7.66122 24.6613 6.87313 24.6613 6C24.6613 5.12687 24.138 4.33878 23.3333 4Z" fill="white"/>
              <rect x="2.33325" y="2.33331" width="18" height="7.33333" rx="1.33333" fill="white"/>
            </svg>
          </div>
        </div>
        <div className="header__content">
          <img src={maskGroup} alt="Mask Group" width="353px" height="290px" />
          <div className="header__content__welcome">
            <p className="header__content__welcome__greeting">Welcome back!</p>
            <h1 className="header__content__welcome__action">Please, Log In.</h1>
          </div>
        </div>
      </div>
      <div className="l-content font-text">
        <form className="form">
          <div className="form__input">
            <img src={user} className="form__input__icon" alt="user" width="14px" height="14px"/>
            <input type="email" alt="email" className="form__input__email font-text" placeholder="johnsondoe@nomail.com"/>
          </div>
          <div className="form__input">
            <img src={key} alt="key" className="form__input__icon" width="11px" height="19px"/>
            <input  type="password" alt="password" className="form__input__password font-text" placeholder="*******************"/>
          </div>
          <div className="form__btn">
            <input type="submit" className="form__btn__submit bg-submit-sign-in font-text" value="Continue >"/>
          </div>
        </form>
        <span className="separate">Or</span>
        <div className="link">
                <a className= "bg-link link__btn " href="./sign-in.html" target="blank">Create an Account</a>
            </div>
      </div>
    </div>
  );
}

export default App;

    
