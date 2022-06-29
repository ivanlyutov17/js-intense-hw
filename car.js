class Car {
  #brand = 'Renault';
  #model = 'Logan';
  #yearOfManufacturing = 2009;
  #maxSpeed = 180;
  #maxFuelVolume = 20;
  #fuelConsumption = 7;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  get isStarted() {
    return this.#isStarted;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get mileage() {
    return this.#mileage;
  }

  get brand() {
    return this.#brand;
  }

  set brand(name) {
    if (typeof name === 'string' && name.length >= 1 && name.length <= 50) {
      this.#brand = name;
    } else {
      throw new Error('Должно быть строкой от 1 до 50 символов');
    }
  }

  get model() {
    return this.#model;
  }

  set model(name) {
    if (typeof name === 'string' && name.length >= 1 && name.length <= 50) {
      this.#model = name;
    } else {
      throw new Error('Должно быть строкой от 1 до 50 символов');
    }
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(year) {
    const currentYear = new Date().getFullYear();
    if (this.#isSafeValue(year) && year >= 1900 && year <= currentYear) {
      this.#yearOfManufacturing = year;
    } else {
      throw new Error('Должно быть числом от 1900 до ныненшнего года');
    }
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(speed) {
    if(this.#isSafeValue(speed) && speed >= 100 && speed <= 300) {
      this.#maxSpeed = speed;
    } else {
      throw new Error('Должно быть числом от 100 до 300');
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(volume) {
    if (this.#isSafeValue(volume) && volume >= 5 && volume <= 20) {
      this.#maxFuelVolume = volume;
    } else {
      throw new Error('Должно быть числом от 5 до 20');
    }
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (this.#isSafeValue(value) && value > 0) {
      this.#fuelConsumption = value;
    } else {
      throw new Error('Должно быть числом больше 0');
    }
  }
  
  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    } else {
      this.#isStarted = true;
    }
  }
  
  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина еще не заведена');
    } else {
      this.#isStarted = false;
    }
  }
  
  fillUpGasTank(volume) {
    if (this.#isSafeValue(volume) && volume > 0) {
      if (volume <= this.#maxFuelVolume - this.#currentFuelVolume) {
        this.#currentFuelVolume += volume;
      } else {
        throw new Error('Топливный бак переполнен');
      }
    } else {
      throw new Error('Неверное количество топлива для заправки');
    }
  }

  drive(speed, hours) {
    if (this.#isSafeValue(speed) && speed < 0) {
      throw new Error('Неверная скорость');
    }
    if (this.#isSafeValue(hours) && hours < 0) {
      throw new Error('Неверное количество часов');
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    const distance = speed * hours;
    const usedFuel = (this.#fuelConsumption * distance) / 100;
    if (usedFuel > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }
    this.#currentFuelVolume -= usedFuel;
    this.#mileage += distance;
  }
  
  #isSafeValue(value) {
    return (typeof value === 'number' && isFinite(value) && !isNaN(value));
  }
}

export class {Car}