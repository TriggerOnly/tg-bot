const tg = window.Telegram.WebApp;

if (!tg) {
    console.error("Telegram Web App is not initialized.");
}

export const useTelegram = () => {
    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if (!tg.MainButton.isVisible) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg, 
        user: tg.initDataUnsafe?.user
    }
}
