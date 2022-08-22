import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailCrypto } from "../../redux/reducers/cryptoRed";
import NavAl from "../../components/Nav/NavAl";
import Footer from "../../components/Footer/Footer";

function CryptoDetail() {
  const { id } = useParams();
  const { details } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailCrypto(id));
  }, [dispatch, id]);
  console.log(details);

  
  
  return (
    <>
    <NavAl/>
    {
      details ? (
        <div className="container-xl">
      <div className="row d-flex align-items-center border-top border-bottom border-2 py-3">
        <div className="d-flex gap-3 col-6 align-items-center">
          <img className="imagdetalle" src={details.logo} alt={details.id} />
          <h1>
            {details.name} <span>{details.symbol}</span>
          </h1>
        </div>
        <div className="col-6">
            <h1 className="fw-bold text-end">
              Precio: <span> ${details.price.toLocaleString( "es-ES" )}</span>
            </h1>
        </div>
      </div>
      <div className="cardDetalle gap-3">
        
        <div className="my-4">
          <h2>Description: <span className="fs-4">{details.description}</span></h2>
        </div>
        <div className="base4">
          <h2>Volumen cada 24h: ${details.volume_24h.toLocaleString( "es-ES" )}</h2>
        </div>
        <div className="base3">
          <h2>Volumen de cambio cada 24h: {" "}
            {
              details.volume_change_24h > 0 ? (
                <span className="text-success">
                  {details.volume_change_24h}
                </span>
              ) : (
                <span className="text-danger">
                  {details.volume_change_24h}
                </span>
              )
            }
          </h2>
        </div>
        <h2 className="text-center m-4">Cambio porcentual</h2>
        <div className="row d-flex align-items-center border border-2">
          <div className="col-2">
            <h4>Cambio 1h:</h4>
          </div>
          <div className="col-2">
            <h4>Cambio 24h:</h4>
          </div>
          <div className="col-2">
            <h4>Cambio 7d:</h4>
          </div>
          <div className="col-2">
            <h4>Cambio 30d:</h4>
          </div>
          <div className="col-2">
            <h4>Cambio 60d:</h4>
          </div>
          <div className="col-2">
            <h4>Cambio 90d:</h4>
          </div>
        </div>
        <div className="row d-flex align-items-center  border border-2 mb-3">
          <div className="col-2">
            <h4>
              {details.percent_change_1h > 0 ? (
                <span className="text-success">
                  {details.percent_change_1h.toLocaleString( "es-ES" )}%
                </span>
              ) : (
                <span className="text-danger">
                  {details.percent_change_1h.toLocaleString( "es-ES" )}%
                </span>
              )}
            </h4>
          </div>
          <div className="col-2">
            <h4>{
              details.percent_change_24h > 0 ? (
                <span className="text-success">
                  {details.percent_change_24h.toLocaleString( "es-ES" )}%
                </span>
              ) : (
                <span className="text-danger">
                  {details.percent_change_24h.toLocaleString( "es-ES" )}%
                </span>
              )
            }
            </h4>
          </div>
          <div className="col-2">
          <h4>{
              details.percent_change_7h > 0 ? (
                <span className="text-success">
                  {details.percent_change_7d.toLocaleString( "es-ES" )}%
                </span>
              ) : (
                <span className="text-danger">
                  {details.percent_change_7d.toLocaleString( "es-ES" )}%
                </span>
              )
            }
            </h4>
          </div>
          <div className="col-2">
          <h4>{
              details.percent_change_30d > 0 ? (
                <span className="text-success">
                  {details.percent_change_30d.toLocaleString( "es-ES" )}%
                </span>
              ) : (
                <span className="text-danger">
                  {details.percent_change_30d.toLocaleString( "es-ES" )}%
                </span>
              )
            }
            </h4>
          </div>
          <div className="col-2">
          <h4>{
              details.percent_change_60d > 0 ? (
                <span className="text-success">
                  {details.percent_change_60d.toLocaleString( "es-ES" )}%
                </span>
              ) : (
                <span className="text-danger">
                  {details.percent_change_60d.toLocaleString( "es-ES" )}%
                </span>
              )
            }
            </h4>
          </div>
          <div className="col-2">
          <h4>{
              details.percent_change_90d > 0 ? (
                <span className="text-success">
                  {details.percent_change_90d.toLocaleString( "es-ES" )}%
                </span>
              ) : (
                <span className="text-danger">
                  {details.percent_change_90d.toLocaleString( "es-ES" )}%
                </span>
              )
            }
            </h4>
          </div>
        </div>
      </div>
    </div>
      ) : (
        <div className="text-center">
          <h1>Loading...</h1>
        </div>
      )
    }
    <Footer/>
    {/* <div className="paginado2">
      <div>
        <img className="imagdetalle" src={details.logo} alt={details.id} />
      </div>
      <div className="cardDetalle">
        <div>
          <h1>
            {details.name} <span>{details.symbol}</span>
          </h1>
        </div>
        <div className="base3">
          <h1>
            Price:
            {details.price}
          </h1>
        </div>
        <div className="base3">
          <h2>Description: {details.description}</h2>
        </div>
        <div className="base3">
          <h2>24%: {details.volume_change_24h}</h2>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default CryptoDetail;