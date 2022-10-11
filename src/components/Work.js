import React from 'react';

const Work = ({
  specification,
  vatAmount,
  totalPrice,
  isCreditInvoice,
  invoiceDays,
}) => {

  return (
    <main className="row margin-lg">
      <table className="col col-12 margin-lg">
        <thead>
          <tr>
            <td>Specifikation</td>
            <td>Antal</td>
            <td>Hyra</td>
            <td>Total pris</td>
          </tr>
        </thead>
        <tbody>
          {
            specification.length > 0 && Object.keys(specification).map((spec) => (

              <tr key={'spec-' + spec}>
                <td>{specification[spec].spec}</td>
                <td>{specification[spec].hours}</td>
                <td>{specification[spec].price}kr</td>
                <td>{isCreditInvoice ? '-' + parseFloat(specification[spec].price) * parseFloat(specification[spec].hours) : parseFloat(specification[spec].price) * parseFloat(specification[spec].hours)}kr</td>
              </tr>
            ))
          }
          <tr>
            <td>Aktuella hyran baseras på avgift till förening, kapitalkostnad med aktuell ränta, möblemang och slitage.</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>

            </td>
            {isCreditInvoice ? (
              <td className="h3">Er tillgodo: {'-' + totalPrice}{parseFloat(vatAmount) === 0 ? ' SEK' : ' kr'}</td>
            ) : (
              <td className="h3">Att betala: {totalPrice}{parseFloat(vatAmount) === 0 ? ' SEK' : ' kr'}</td>
            )}

          </tr>
        </tfoot>
      </table>
      <div className="col col-4 margin-sm">
        <p className="h3">Till SEB-konto:</p>
        <p className="margin-df">5356 33 124 86</p>
      </div>
      <div className="col col-3 margin-sm">
        <p className="h3">Förfallodatum:</p>
        <p>{invoiceDays}</p>
      </div>
    </main>
  )
}

export default Work
