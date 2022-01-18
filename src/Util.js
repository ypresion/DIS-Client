export const getReadingList = async () => {
    let url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"
    let formData = new FormData();
    let result = [];
    formData.append('token', localStorage.getItem('authToken'));
  
    return await fetch(url, {
        method: 'POST',
        headers: new Headers(),
        body: formData
    })
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw Error(response.statusText);
            }
        })
        .then((data) => {
            result = data.results
        })
        .then(() => {
            returnResult(result)
        })
        .catch((err) => {
            console.log("something went wrong ", err)
        });
  }

  export const returnResult = (result) => {
    console.log(result)
    return result;
  }