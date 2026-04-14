import React, { useEffect, useState } from "react";

function MyCity() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true"
        );

        if (!response.ok) {
          throw new Error("Не вдалося отримати дані");
        }

        const data = await response.json();
        setWeather(data.current_weather);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, []);

  return (
    <section>
      <h2>Моє місто</h2>
      <p>
        Київ — столиця України, велике історичне та культурне місто.
      </p>
      <p><strong>Країна:</strong> Україна</p>
      <p><strong>Координати:</strong> 50.45, 30.52</p>

      <h3>Поточна погода</h3>

      {loading && <p>Завантаження...</p>}
      {error && <p>Помилка: {error}</p>}

      {weather && (
        <div>
          <p><strong>Температура:</strong> {weather.temperature}°C</p>
          <p><strong>Швидкість вітру:</strong> {weather.windspeed} км/год</p>
          <p><strong>Напрямок вітру:</strong> {weather.winddirection}°</p>
          <p><strong>Час:</strong> {weather.time}</p>
          <p><strong>Опис:</strong> Поточні погодні дані через API</p>
        </div>
      )}
    </section>
  );
}

export default MyCity;