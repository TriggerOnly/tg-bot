import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const { tg } = useTelegram(); 

    const onSendData = useCallback(() => {
        const data = {
            country, 
            street,
            subject
        }
        tg.sendData(JSON.stringify(data))
    }, [tg, country, street, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [tg, onSendData])

    useEffect(() => {
        if (!tg) {
            console.error("Telegram Web App is not initialized.");
            return;
        }  

        tg.ready();

        if (tg.MainButton) {
            tg.MainButton.setParams({
                text: 'Отправить данные',
            });
        } else {
            console.error("MainButton is not available on tg.");
        }
    }, [tg]);

    useEffect(() => {
        if (tg.MainButton) {
            if (!country || !street) {
                tg.MainButton.hide();
            } else {
                tg.MainButton.show();
            }
        }
    }, [country, street, tg]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    };

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    };

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input 
                className={'input'} 
                type='text' 
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input 
                className={'input'} 
                type='text' 
                placeholder={'Улица '}
                value={street}
                onChange={onChangeStreet}
            />
            <select 
                value={subject} 
                onChange={onChangeSubject}
                className={'select'}
            >
                <option value={'physical'}>Физическое лицо</option>
                <option value={'legal'}>Юридическое лицо</option>
            </select>
        </div>
    );
};

export default Form;
