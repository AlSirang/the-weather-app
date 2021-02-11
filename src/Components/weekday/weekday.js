const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const Weekday = () => {
    const weekDay = new Date().getDay();
    const today = weekDays[weekDay];

    return (
        <>
            <p className="sub-heading">{today}</p>
        </>
    );
};
