export class WeatherAPI {
    constructor() {
        this.apiKey = '9af50da83394dbd3afa618ee50ba7b5a'; 
        this.defaultCity = 'Dubai'; 
        this.baseUrl = 'http://api.weatherstack.com';
    }

    async getCurrentWeather() {
        try {
            const response = await fetch(
                `${this.baseUrl}/current?access_key=${this.apiKey}&query=${this.defaultCity}&units=m`
            );
            
            if (!response.ok) {
                throw new Error(`Weather API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.error) {
                throw new Error(`Weatherstack API error: ${data.error.info}`);
            }
            
            console.log('Current weather data received:', data);
            return this._formatCurrentWeatherData(data);
            
        } catch (error) {
            console.error('Error fetching current weather:', error);
            throw error;
        }
    }

    async getWeatherForDate(targetDate) {
        try {
            const dateString = targetDate.toISOString().split('T')[0];
            
            const today = new Date().toISOString().split('T')[0];
            if (dateString === today) {
                return await this.getCurrentWeather();
            }
            
            const isFutureDate = targetDate > new Date();
            
            if (isFutureDate) {
                return await this.getForecastForDate(targetDate);
            } else {
                // Для прошлых дат используем historical API
                return await this.getHistoricalWeather(dateString);
            }
            
        } catch (error) {
            console.error('Error fetching weather for date:', error);
            throw error;
        }
    }

    async getForecastForDate(targetDate) {
        try {
            const response = await fetch(
                `${this.baseUrl}/forecast?access_key=${this.apiKey}&query=${this.defaultCity}&forecast_days=7&units=m`
            );
            
            if (!response.ok) {
                throw new Error(`Forecast API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.error) {
                throw new Error(`Weatherstack API error: ${data.error.info}`);
            }
            
            const dateString = targetDate.toISOString().split('T')[0];
            const forecastForDate = data.forecast[dateString];
            
            if (!forecastForDate) {
                throw new Error('No forecast available for selected date');
            }
            
            console.log('Forecast data for date received:', forecastForDate);
            
            return {
                location: data.location.name,
                date: targetDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                }),
                temperature: Math.round(forecastForDate.avgtemp),
                feelsLike: Math.round(forecastForDate.avgtemp), 
                description: forecastForDate.hourly[0].weather_descriptions[0],
                iconCode: this._mapWeatherCodeToIcon(forecastForDate.hourly[0].weather_code),
                humidity: forecastForDate.avghumidity,
                windSpeed: Math.round(forecastForDate.maxwind * 3.6), 
                pressure: forecastForDate.hourly[0].pressure,
                isForecast: true
            };
            
        } catch (error) {
            console.error('Error fetching forecast:', error);
            throw error;
        }
    }

    async getHistoricalWeather(dateString) {
        try {
            const response = await fetch(
                `${this.baseUrl}/historical?access_key=${this.apiKey}&query=${this.defaultCity}&historical_date=${dateString}&units=m`
            );
            
            if (!response.ok) {
                throw new Error(`Historical API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.error) {
                throw new Error(`Weatherstack API error: ${data.error.info}`);
            }
            
            console.log('Historical weather data received:', data);
            
            const historicalDate = data.historical[dateString];
            
            return {
                location: data.location.name,
                date: new Date(dateString).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                }),
                temperature: Math.round(historicalDate.avgtemp),
                feelsLike: Math.round(historicalDate.avgtemp),
                description: historicalDate.hourly[0].weather_descriptions[0],
                iconCode: this._mapWeatherCodeToIcon(historicalDate.hourly[0].weather_code),
                humidity: historicalDate.avghumidity,
                windSpeed: Math.round(historicalDate.maxwind * 3.6),
                pressure: historicalDate.hourly[0].pressure,
                isHistorical: true
            };
            
        } catch (error) {
            console.error('Error fetching historical weather:', error);
            throw error;
        }
    }

    _formatCurrentWeatherData(data) {
        return {
            location: data.location.name,
            date: new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            temperature: Math.round(data.current.temperature),
            feelsLike: Math.round(data.current.feelslike),
            description: data.current.weather_descriptions[0],
            iconCode: this._mapWeatherCodeToIcon(data.current.weather_code),
            humidity: data.current.humidity,
            windSpeed: Math.round(data.current.wind_speed * 3.6),
            pressure: data.current.pressure,
            isCurrent: true,
            observationTime: data.current.observation_time
        };
    }

    _mapWeatherCodeToIcon(weatherCode) {
        const codeMap = {
            // Ясно
            113: '01d', // Sunny/Clear
            // Преимущественно ясно
            116: '02d', // Partly cloudy
            // Облачно
            119: '03d', // Cloudy
            122: '04d', // Overcast
            // Туман
            143: '50d', // Mist
            248: '50d', // Fog
            260: '50d', // Freezing fog
            // Морось
            263: '09d', // Patchy light drizzle
            266: '09d', // Light drizzle
            281: '09d', // Freezing drizzle
            284: '09d', // Heavy freezing drizzle
            // Дождь
            176: '10d', // Patchy rain possible
            293: '10d', // Patchy light rain
            296: '10d', // Light rain
            299: '10d', // Moderate rain at times
            302: '10d', // Moderate rain
            305: '10d', // Heavy rain at times
            308: '10d', // Heavy rain
            311: '13d', // Light freezing rain
            314: '13d', // Moderate or heavy freezing rain
            317: '13d', // Light sleet
            320: '13d', // Moderate or heavy sleet
            // Снег
            179: '13d', // Patchy snow possible
            182: '13d', // Patchy sleet possible
            185: '13d', // Patchy freezing drizzle possible
            227: '13d', // Blowing snow
            230: '13d', // Blizzard
            323: '13d', // Patchy light snow
            326: '13d', // Light snow
            329: '13d', // Patchy moderate snow
            332: '13d', // Moderate snow
            335: '13d', // Patchy heavy snow
            338: '13d', // Heavy snow
            // Гроза
            200: '11d', // Thundery outbreaks possible
            386: '11d', // Patchy light rain with thunder
            389: '11d', // Moderate or heavy rain with thunder
            392: '11d', // Patchy light snow with thunder
            395: '11d', // Moderate or heavy snow with thunder
        };
        
        return codeMap[weatherCode] || '01d'; 
    }

    getWeatherIcon(iconCode) {
        const iconMap = {
            '01d': '☀️', '01n': '🌙',
            '02d': '⛅', '02n': '☁️',
            '03d': '☁️', '03n': '☁️',
            '04d': '☁️', '04n': '☁️',
            '09d': '🌧️', '09n': '🌧️',
            '10d': '🌦️', '10n': '🌦️',
            '11d': '⛈️', '11n': '⛈️',
            '13d': '❄️', '13n': '❄️',
            '50d': '🌫️', '50n': '🌫️'
        };
        
        return iconMap[iconCode] || '🌈';
    }
}