import React from "react"

const NewsCard = props => {
  const {
    title,
    url,
    hdurl,
    explanation,
    date,
    copyright,
    media_type,
  } = props.data

  function renderContent() {
    switch (media_type) {
      case "video":
        return (
          <iframe
            allowFullScreen
            frameBorder="0"
            height="520"
            width="720"
            src={url}
          />
        )

      case "image":
        return <img src={hdurl} alt={title} />

      default:
        return null
    }
  }

  return (
    <div className="News">
      <h3 className="title">{title}</h3>

      {renderContent()}

      <p className="explan">{explanation}</p>

      <span>
        {date}, {copyright}
      </span>
    </div>
  )
}

export default NewsCard
