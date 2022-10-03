import React from 'react';

const Header = ({
  invoiceTitle,
  invoiceNumber,
  invoiceDate,
}) => {
  return (
    <header className="row margin-lg">
      <div className="col col-6 margin-md">
        <h1 className='h1 margin-df'>Hyresavi</h1>
        <p>S:t Göransgatan 82</p>
      </div>
      <div className="col col-6">
        <h1 className="h1 margin-sm">{invoiceTitle}</h1>
        <h2 className="h2 margin-df">Fakturanummer: {invoiceNumber}</h2>
        <div className="row margin-df">
          <div className="col col-4">
            <h3 className="h3">Utskriftsdatum:</h3>
          </div>
          <div className="col col-8">
            <p>{invoiceDate}</p>
          </div>
        </div>
        <div className="row margin-df">
          <div className="col col-4">
            <h3 className="h3">Er referens:</h3>
          </div>
          <div className="col col-8">
            <p style={{ whiteSpace: 'pre-line' }} className="margin-sm">Tatsumi Suzuki</p>
            <p style={{ whiteSpace: 'pre-line' }}>Aha Digital AB</p>
            <p style={{ whiteSpace: 'pre-line' }}>S:t Göransgatan 82</p>
            <p style={{ whiteSpace: 'pre-line' }}>112 82 Stockholm</p>
          </div>
        </div>
        <div className="row margin-df">
          <div className="col col-4">
            <h3 className="h3">Vår referens:</h3>
          </div>
          <div className="col col-8">
            <p>Cecilia Fredriksson</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-4">
            <h4 className="h3 margin-sm">Adress:</h4>
          </div>
          <div className="col col-8">
            <p>Wollmar Yxkullsgatan 2b</p>
            <p>118 50 Stockholm</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
