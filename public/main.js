let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n+1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n+=1
    }
  };
  request.send();
};
getJson.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const object = JSON.parse(request.response)
            myName.innerHTML = object.name
            console.log(object);
        }
    }
    request.send()
}
getXml.onclick = () => {
    // console.log('111');
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml')
        // console.log(request.readyState);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim());
        } else {
            alert('失败了')
        }
    }
    request.send()
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {

    }
    request.send()
}
getCss.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status <= 200 && request.status < 300) {
                console.log('成功了');
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载失败')
            }
        }
    }
    request.send();
}
getJs.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)

    }
    request.onerror = () => {

    }
    request.send()
}