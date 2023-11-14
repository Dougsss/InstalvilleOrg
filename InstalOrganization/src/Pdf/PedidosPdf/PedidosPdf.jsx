import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function PedidosPdf (pedidos){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            alignment: 'justify',
            columns: [
                {
                    //Image: 'data:logo.png',
                },
                [
                    {
                        text: 'Contato: (47) 9 9999-1687',
                        fontSize: 9,
                        alignment: 'center',
                        bold: true,
                        margin: [0,20,0,10] // left, top , right, bottom
                    },
                    {
                        text: 'E-mail: comercialinstalville@gmail.com',
                        fontSize: 9,
                        alignment: 'center',
                        bold: true,
                        margin: [0,20,0,10] // left, top , right, bottom
                    },
                    {
                        text: 'Responsalvel tecnico: Danilo de Oliveira',
                        fontSize: 9,
                        alignment: 'center',
                        bold: true,
                        margin: [0,20,0,10] // left, top , right, bottom
                    }
                ]
            ]
        }
    ];

    const details = [];

    function Rodape(currentPage, pageCount){
        return[
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin: [0,10,20,0]
            }
        ]
    };

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer: Rodape
    }

    pdfMake.createPdf(docDefinitions).download();

}

export default PedidosPdf;
