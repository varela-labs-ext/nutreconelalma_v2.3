// src/components/pdf/PlainTextReportPDF.tsx
import { useComparisonContext } from '@/context/ComparisonContext/ComparisonProvider';
import { Document, Page, Text, StyleSheet, Font } from '@react-pdf/renderer';

// Fuente monoespaciada (Courier ya es built-in pero podrías usar otra)
Font.register({
    family: 'Courier',
    fonts: [{ src: 'https://fonts.gstatic.com/s/courierprime/v7/u-4x0qWljRw-PdeL2uhquylEeQ5JZ-Y.woff2' }]
});

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Courier',
        fontSize: 10,
        padding: 30,
    },
    line: {
        marginBottom: 2,
        whiteSpace: 'pre-wrap',
    },
});

// Función para alinear texto por padding
const pad = (value: string | number, length: number, align: 'left' | 'right' = 'left') => {
    const str = String(value);
    if (str.length >= length) return str.slice(0, length);
    return align === 'right' ? str.padStart(length, ' ') : str.padEnd(length, ' ');
};

interface PlainTextReportPDFProps {
    inPrintResuls: string[];
}

export const PlainTextReportPDF = (props: PlainTextReportPDFProps) => {


    // const header = `${pad('Nombre', 20)}${pad('Edad', 6, 'right')}  ${pad('Cargo', 25)}`;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* <Text style={styles.line}>Reporte de Empleados</Text>
                <Text style={styles.line}>{header}</Text>
                <Text style={styles.line}>{'-'.repeat(header.length)}</Text> */}

                {props.inPrintResuls.map((item, index) => (
                    <Text key={index} style={styles.line} wrap={false}>
                        {item}
                    </Text>
                ))}
            </Page>
        </Document>
    );
};
