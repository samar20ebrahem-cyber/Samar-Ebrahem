import './Loader.css'

export function Loader() {
    return (
        <div className="loader">
            <div className="loader__content">
                <div className="loader__logo">
                    S<span>.</span>
                </div>

                <h1 className="loader__name">
                    SAMAR EBRAHEM
                </h1>

                <p className="loader__role">
                    FRONT-END DEVELOPER
                </p>

                <div className="loader__bar">
                    <div className="loader__progress"></div>
                </div>

                <p className="loader__text">
                    Preparing your experience...
                </p>
            </div>
        </div>
    )
}