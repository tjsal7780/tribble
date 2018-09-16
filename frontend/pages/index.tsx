import * as React from 'react'

const data= [
  { 
    id: 1,
    image: "/static/card-image.jpg",
    category: "danang",
    cities: [
      "다낭",
      "호이안",
      "후에"
    ]
  }, { 
    id: 2,
    image: "/static/card-image.jpg",
    category: "kotakinabalu",
    cities: [
      "코타키나발루"
    ]
  }, { 
    id: 3,
    image: "/static/card-image.jpg",
    category: "SAN FRANCISCO",
    cities: [
      "샌프란시스코",
      "산호세",
      "나파 밸리"
    ]
  }, { 
    id: 4,
    image: "/static/card-image.jpg",
    category: "OSAKA",
    cities: [
      "오사카",
      "교토",
      "고베",
      "나라"
    ]
  }, { 
    id: 5,
    image: "/static/card-image.jpg",
    category: "HONGKONG",
    cities: [
      "홍콩",
      "마카오"
    ]
  }, { 
    id: 6,
    image: "/static/card-image.jpg",
    category: "BANGKOK",
    cities: [
      "방콕",
      "파타야"
    ]
  }, { 
    id: 7,
    image: "/static/card-image.jpg",
    category: "GUAM",
    cities: [
      "괌"
    ]
  }, { 
    id: 8,
    image: "/static/card-image.jpg",
    category: "PARIS",
    cities: [
      "파리",
      "베르사유",
      "몽생미셸 스트라스부르"
    ]
  }, { 
    id: 9,
    image: "/static/card-image.jpg",
    category: "CEBU",
    cities: [
      "세부"
    ]
  }, { 
    id: 10,
    image: "/static/card-image.jpg",
    category: "SINGAPORE",
    cities: [
      "싱가포르"
    ]
  }
]

class Index extends React.Component {
  private nav: any
  private lastScrollY: number
  private ticking: boolean

  public constructor(props) {
    super(props)
    this.nav = React.createRef()

    this.lastScrollY = 0
    this.ticking = false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }


  handleScroll = () => {
    this.lastScrollY = window.scrollY

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.nav.current.style.height = `${460 - this.lastScrollY}px`
        this.ticking = false
      })
      this.ticking = true
    }
  };
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between p-3">
          <h1 className="text-green">tribble</h1>
          <button type="button" className="btn btn-info text-white">로그인</button>
        </div>
        <div ref={this.nav} className="main-image d-flex flex-column justify-content-center align-items-center position-relative">
          <div className="background-shadow position-absolute"></div>
          <div className="main-image-text position-relative text-center">
            <form className="search-form">
              <div className="form-group search-input">
                <input className="form-control" type="text" name="city" placeholder="여행할 도시를 검색하세요" />
              </div>
              <button type="button" className="btn btn-danger text-white">검색</button>
            </form>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center p-3" style={{ minWidth: '50%'}}>
          { data.map((v, i) => (
            <div key={i} className="card m-1" style={{ width: '18rem' }}>
              <img className="card-img-top rounded-circle" src={v.image} height="270" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{v.category}</h5>
                <p className="card-text">{v.cities.join(", ")}</p>
                <div className="text-center">
                  <a href="#" className="btn btn-success">살펴보기</a>
                </div>
              </div>
            </div>
          )) }
        </div>
        <style jsx>{`{
          .main-image {
            height: 400px;
            min-height: 200px;
            background-image: url(/static/main-image.jpg);
            background-size: cover;
            background-position: center;
          }
          .main-image-text {
            z-index: 5;
          }
          .background-shadow {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
          }
          .text-green {
            color: #41CAA7 !important;
          }
          .search-form {
            display: flex;
          }
          .search-input {
            margin-bottom: 0 !important;
            margin-right: 5px;
          }
        }`}</style>
      </div>
    )
  }
}

export default Index
