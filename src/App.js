import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <header>
          <div className='header-container'>
            <div>
              <img alt='' height={36} src='/psychology.png' />
            </div>
            <div>
              <div className='header-name'>Воронич Сергей Викторович</div>
              <div className='header-position'>Врач, психолог</div>
            </div>
          </div>
        </header>
      </div>
      <div className='navigation'>
        <div><a href='/'>Обо мне</a></div>
        <div><a href='/'>Услуги</a></div>
        <div><a href='/'>Контакты</a></div>
      </div>
      <div className='content'>
        <div>
          <p style={{ 'margin': '2.5rem 0' }}>Позаботьтесь о своем душевном здоровье!</p>
          <div style={{ 'margin-bottom': '0.5rem' }}>Очный прием в г. Гродно или онлайн-консультации</div>
          <ul className='content-list'>
            <li>Дипломированный врач, психолог</li>
            <li>Собственный опыт борьбы с неврозом</li>
            <li>Краткосрочная и длительная терапия</li>
            <li>Безопасно, эффективно и конфиденциально</li>
          </ul>
        </div>
        <div>
          <img alt='' height={350} src='/photo_new_2_no_bg.png' />
        </div>
      </div>
      <div className='footer'>
        <div>Индивидуальная терапия</div>
        <div>Групповые занятия</div>
        <div>Онлайн-консультации</div>
      </div>
    </div>
  );
}

export default App;
