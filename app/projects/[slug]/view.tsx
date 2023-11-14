"use client";

import { useEffect, useState } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
    const [isError, setError] = useState(false);

    useEffect(() => {
        const reportView = async () => {
            try {
                const response = await fetch("/api/incr", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ slug }),
                });

                if (!response.ok) {
                    throw new Error('Failed to report view');
                }
            } catch (error) {
                console.error('Error reporting view:', error);
                setError(true);
            }
        };

        reportView();
    }, [slug]);

    // Optionally, you can render something based on the isError state
    if (isError) {
        return <div>Error in reporting view</div>;
    }

    return null;
};
