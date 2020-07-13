const fetchQuestions = async () => {
        try {
            const resp = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean')
        return await resp.json()
        } catch (err) {
            console.log(err)
            return err
        }
}

export default fetchQuestions