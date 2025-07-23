import { useComparisonContext } from "@/context/ComparisonContext/ComparisonProvider";

interface PlainTextReportHTMLProps {
}

export const PlainTextReportHTML = (props: PlainTextReportHTMLProps) => {
    const { printingResults } = useComparisonContext();

    return (
        <pre className="font-mono text-sm whitespace-pre-wrap">
            {[
                ...printingResults
            ].join('\n')}
        </pre>
    );
};
