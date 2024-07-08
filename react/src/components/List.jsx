function List() {
      const porkImg = "https://www.kitchensanctuary.com/wp-content/uploads/2018/10/Sticky-Chinese-Pork-Belly-tall1-6.webp";
      const fishImg = "https://www.easychineserecipes.com/wp-content/uploads/2020/01/White-Fish-1-500x500.jpg";
      const cakeImg = "https://i.ytimg.com/vi/5sK8p9HUOpI/maxresdefault.jpg";

      return (
            <ul>
                  <li><img className='square-img' src={porkImg} alt='' /></li>
                  <li><img className='square-img' src={fishImg} alt=''/></li>
                  <li><img className='square-img' src={cakeImg} alt='' /></li>
            </ul>
      )
}

export default List;