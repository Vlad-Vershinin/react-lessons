function ConditionsReturn() {
    const isAdmin = true;
    if (isAdmin)
        return <div><p>Администратор</p><p>Панель управления</p></div>;
    return null;
}
export default ConditionsReturn;
