const Products = () => {

    return(
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <h4>محصولات</h4>
                    </div>
                    <div className={"col-6"}>
                        <button className="buttonGlass glass green-a float-start" type="button">ساخت محصول جدید</button>
                    </div>
                </div>

                <br/>
              <div className={"col-12"}>
                  <table className="tableGlass w-100">
                      <thead>
                      <tr>
                          <th>Column 1</th>
                          <th>Column 2</th>
                          <th>Column 3</th>
                          <th>Column 4</th>
                          <th>Column 5</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>Cell 1</td>
                          <td>Cell 2</td>
                          <td>Cell 3</td>
                          <td>Cell 4</td>
                          <td>Cell 5</td>
                      </tr>
                      <tr>
                          <td>Cell 1</td>
                          <td>Cell 2</td>
                          <td>Cell 3</td>
                          <td>Cell 4</td>
                          <td>Cell 5</td>
                      </tr>
                      </tbody>
                  </table>
              </div>

            </div>
        </>
    )
}
export default Products;