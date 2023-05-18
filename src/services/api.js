const API_BASE_URL = 'http://www.filltext.com';

//Малый объем данных
export const fetchSmallData = async() => {
  try {
    const response = await fetch(`${API_BASE_URL}/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);

    if (!response.ok) {
      throw new Error('Ошибка получения данных');
    }
    if (response.status === undefined) {
      throw new Error('Request failed: Response status is undefined');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error message');
  }
}
 


export const fetchLargeData = async() => {
  try {
    const response = await fetch(`${API_BASE_URL}/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);

    if (!response.ok) {
      throw new Error('Ошибка получения данных');
    }
    if (response.status === undefined) {
      throw new Error('Request failed: Response status is undefined');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error message');
  }
}

