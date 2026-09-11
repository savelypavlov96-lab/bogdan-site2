 "use client";

import { useState } from "react";

const photos = [
  { src: "/images/bogdan-war.png", title: "На службе", tag: "Полевой портрет" },
  { src: "/images/photo-01.jpg", title: "До службы", tag: "Личный архив" },
  { src: "/images/photo-02.jpg", title: "Личный архив", tag: "Личный архив" },
  { src: "/images/photo-03.jpg", title: "С друзьями", tag: "Личная жизнь" },
  { src: "/images/photo-04.jpg", title: "Тренировка", tag: "Подготовка" },
  { src: "/images/photo-05.jpg", title: "Портрет", tag: "Личный архив" },
  { src: "/images/photo-06.jpg", title: "Архив", tag: "Личный архив" }
];

export default function Site() {
  const [tab, setTab] = useState("home");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const go = (id: string) => {
    setTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <header className="nav">
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">БС</span>
          <span>БОГДАН СОКРУЕНКО</span>
        </button>
        <nav>
          <button className={tab === "bio" ? "active" : ""} onClick={() => go("bio")}>Биография</button>
          <button className={tab === "gallery" ? "active" : ""} onClick={() => go("gallery")}>Фотогалерея</button>
          <button className={tab === "contacts" ? "active" : ""} onClick={() => go("contacts")}>Контакты</button>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">ЛИЧНЫЙ АРХИВ · 2020—2026</p>
          <h1>БОГДАН<br /><em>СОКРУЕНКО</em></h1>
          <p className="lead">История человека, службы, характера и людей, которые были рядом.</p>
          <button className="primary" onClick={() => go("bio")}>Открыть биографию <span>↘</span></button>
        </div>
        <div className="hero-side">АРХИВ<br />01 / 04</div>
      </section>

      <section id="bio" className="section bio">
        <div className="section-kicker">01 — БИОГРАФИЯ</div>
        <div className="section-grid">
          <div>
            <h2>Человек<br /><span>за формой.</span></h2>
          </div>
          <div className="bio-text">
            <p className="big">Богдан Сокруенко — ветеран СВО. С 2020 по 2026 год его жизнь была тесно связана со службой.</p>
            <p>Этот раздел задуман как личная хроника: даты, события, воспоминания и факты, которые ты сам захочешь сохранить здесь. Сейчас это стартовая версия сайта — текст можно заменить на точную биографию без переделки дизайна.</p>
            <div className="timeline">
              <div><b>2020</b><span>Начало службы</span></div>
              <div><b>2020—2026</b><span>Период службы и боевого опыта</span></div>
              <div><b>2026</b><span>Завершение периода службы</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="quote-mark">“</div>
        <blockquote>Память — это не только даты.<br />Это люди, места и моменты,<br />которые остаются с нами.</blockquote>
      </section>

      <section id="gallery" className="section gallery">
        <div className="section-head">
          <div>
            <div className="section-kicker">02 — ФОТОГАЛЕРЕЯ</div>
            <h2>Личный<br /><span>архив.</span></h2>
          </div>
          <p>Фотографии собраны в одну визуальную историю. Нажми на кадр, чтобы открыть его полностью.</p>
        </div>
        <div className="gallery-grid">
          {photos.map((p, i) => (
            <button key={p.src} className={`photo photo-${i}`} onClick={() => setLightbox(p.src)}>
              <img src={p.src} alt={p.title} />
              <span className="photo-caption"><b>{p.title}</b><small>{p.tag}</small></span>
            </button>
          ))}
        </div>
      </section>

      <section id="contacts" className="section contacts">
        <div className="section-kicker">03 — КОНТАКТЫ</div>
        <div className="contact-layout">
          <div>
            <h2>Связаться<br /><span>с Богданом.</span></h2>
            <p>Здесь можно разместить Telegram, VK, Instagram или любой другой способ связи.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Форма готова. Подключи URL Render API в обработчике."); }}>
            <label>ИМЯ<input required placeholder="Как вас зовут" /></label>
            <label>EMAIL<input required type="email" placeholder="you@example.com" /></label>
            <label>СООБЩЕНИЕ<textarea required rows={5} placeholder="Ваше сообщение" /></label>
            <button className="primary" type="submit">Отправить сообщение ↗</button>
          </form>
        </div>
      </section>

      <footer>
        <span>БОГДАН СОКРУЕНКО</span>
        <span>ЛИЧНЫЙ АРХИВ · 2026</span>
      </footer>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="close" onClick={() => setLightbox(null)}>×</button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
