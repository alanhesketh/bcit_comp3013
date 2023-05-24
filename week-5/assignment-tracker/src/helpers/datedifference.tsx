const datedifference = (date: Date) => {

    const dateToday = new Date();
    const dateDue = new Date(date);
    const diffTime = dateDue - dateToday;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

export { datedifference };
