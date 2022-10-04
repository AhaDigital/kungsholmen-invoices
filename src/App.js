import React, { useState, Fragment } from 'react'

import Header from './components/Header';
import Work from './components/Work';
import moment from 'moment';

const App = () => {
  const [invoiceNumber, setInvoiceNumber] = useState(0)
  const [invoiceDate, setInvoiceDate] = useState(moment().format('YYYY-MM-DD'))
  const [invoiceTitle, setInvoiceTitle] = useState()
  const [specification, setSpecification] = useState([])
  const [isCreditInvoice, setIsCreditInvoice] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [invoiceDays, setInvoiceDays] = useState()

  const editRow = (row, event) => {
    const editSpec = [...specification]
    editSpec[row][event.name] = event.value

    setSpecification(editSpec)
  }

  const addRow = () => {
    const specifications = [...specification, {
      spec: '',
      hours: 0,
      price: 0,
      vatAmount: 0,
    }]
    setSpecification(specifications)
  }

  const updateInvoice = () => {

    let totalExVat = 0
    let withVat = 0

    let vat = 0

    Object.keys(specification).map((spec) => {
      return totalExVat += parseFloat(specification[spec].hours) * parseFloat(specification[spec].price)
    });

    withVat = Math.ceil(totalExVat * vat)

    setTotalPrice(vat === 0 ? totalExVat : withVat)
  }

  return (
    <Fragment>
      <form onSubmit={(e) => e.preventDefault()}>
        <section className="editor-wrapper">
          {/* Credit invoice, Title, Invoicenr */}
          <div className="row margin-md">
            <fieldset className="col col-3">
              <label htmlFor="creditInvoice">
                <input id="creditInvoice" type="checkbox" name="credit"
                  value={isCreditInvoice}
                  checked={isCreditInvoice}
                  onChange={() => setIsCreditInvoice(!isCreditInvoice)} />
                &nbsp;Kreditfaktura
              </label>
              <label htmlFor="invoiceTitle">
                Titel:
                <input id="invoiceNr" type="text" name="invoiceTitle" placeholder="Faktura"
                  value={isCreditInvoice ? 'Kreditfaktura' : invoiceTitle}
                  onChange={(e) => setInvoiceTitle(e.target.value)} />
              </label>
              <label htmlFor="invoiceNumber">
                Fakturanummer:
                <input id="invoiceNumber" type="text" name="invoiceNumber"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)} />
              </label>
            </fieldset>
          </div>
        </section>
        <section className="editor-wrapper">
          <div className="row margin-md">
            <div className="col col-7">
              <h2 className="margin-sm">Utfört arbete</h2>
              {
                Object.keys(specification).map((spec) => (
                  <fieldset key={'spec-' + spec} className="row">
                    <div className="col col-6">
                      <label>
                        Specifikationsrad
                        <input type="text" name="spec"
                          value={specification[spec].spec}
                          onChange={(e) => editRow(spec, e.target)} />
                      </label>
                    </div>
                    <div className="col col-3">
                      <label>
                        Antal
                        <input type="text" name="hours"
                          value={specification[spec].hours}
                          onChange={(e) => editRow(spec, e.target)} />
                      </label>
                    </div>
                    <div className="col col-3">
                      <label>
                        Hyra
                        <input type="text" name="price"
                          value={specification[spec].price}
                          placeholder="+"
                          onChange={(e) => editRow(spec, e.target)} />
                      </label>
                    </div>
                  </fieldset>
                ))
              }
              <button onClick={() => addRow()}>Lägg till rad</button>
              <button onClick={() => updateInvoice()}>Uppdatera pris</button>
            </div>
          </div>
        </section>
        <section className="editor-wrapper">
          <div className="row margin-md">
            <div className="col col-7">
              <label htmlFor="invoiceDate">
                Dagens datum
                <input type="text" name="price"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)} />
              </label>
              <label htmlFor="invoiceDate">
                Fakturadagar
                <select
                  name="invoiceDays"
                  onChange={(e) => setInvoiceDays(e.target.value)}
                  value={invoiceDays}>
                  <option value="30">30 dagar</option>
                  <option value="20">20 dagar</option>
                  <option value="15">15 dagar</option>
                  <option value="10">10 dagar</option>
                </select>
              </label>
            </div>
          </div>
        </section>
      </form>
      <div className="desktop-wrapper">
        <Header
          invoiceTitle={isCreditInvoice ? 'Kreditfaktura' : invoiceTitle}
          invoiceNumber={invoiceNumber}
          invoiceDate={invoiceDate}
        />
        <Work
          specification={specification}
          vatAmount={0}
          vatPrice={0}
          totalPrice={totalPrice}
          isCreditInvoice={isCreditInvoice}
          invoiceDays={moment(invoiceDate).add(parseInt(invoiceDays || 30, 10), 'days').format('YYYY-MM-DD')}
          invoiceDescription=''
        />
      </div>
    </Fragment>
  )
}
export default App
