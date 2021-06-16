import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="footer__itemWrapper">
                <div className="footer__adress">
                    <strong>CLC Rustfri ApS</strong><br/><br/>
                    Norgesvej 10 <br/>
                    8450 Hammel <br/>
                    Tlf: 2821 4224 <br/>
                </div>
            </div>
            <div className="footer__itemWrapper">
                <div className="footer__certificate">
                    <p>CLC Rustfri støtter:</p>
                    <img src="./media/images/fkn_logo.gif" alt="FKN Logo" />
                    <p>CLC Rustfri er certificeret af DANAK og Inspecta</p>
                </div>
            </div>
            <div className="footer__itemWrapper">
                <div className="footer__some">
                    <p>Se mere her:</p>
                    <div className="some__imgCont">
                        <a href="/">
                            <img src="./media/images/some/face.png" alt="Facebook logo" />
                        </a>
                        <a href="/">
                            <img src="./media/images/some/insta.png" alt="Instagram logo" />
                        </a>
                        <a href="/">
                            <img src="./media/images/some/link.png" alt="LinkedIn logo" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
