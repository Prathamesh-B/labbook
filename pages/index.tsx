import Link from 'next/link';
import { Prism } from '@mantine/prism';

const demoCode = `#include <stdio.h>
#include <stdlib.h>
int main()
{
    FILE *file;
    char path[100];
    char ch, str[100];
    int character, words, lines;
    printf("Enter source file path: ");
    scanf("%s", path);
    file = fopen(path, "r");
    if (file == NULL)
    {
        printf("\n Unable to open file.");
        exit(0);
    }
    character = words = lines = 0;
    while ((ch = fgetc(file)) != EOF)
    {
        character++;
        if (ch == '\\n' || ch == '\\0')
            lines++;
        if (ch == ' ' || ch == '\t' || ch == '\n' || ch == '\0')
            words++;
    }
    if (character > 0)
    {
        words++;
        lines++;
    }
    printf("Total character=%d\n", character);
    printf("Total words=%d\n", words);
    printf("Total lines=%d\n", lines);
    fclose(file);
    return 0;
}`;

export default function Home() {
    return <>
        <main className="font-mono bg-white mt-36">
            <h2 className="p-4 text-5xl md:text-6xl font-bold text-gray-800 text-center">
            S.Y.B.Sc. Computer Science
            </h2>
            <div className="flex  justify-center mt-4">
                <Link href={'/assignments'}><p className="uppercase py-2 px-4 bg-transparent border-2 border-gray-800 text-gray-800  hover:bg-gray-800 hover:text-white text-md">
                    Assignments
                </p></Link>
            </div>
            <Prism className='m-9' language="c">{demoCode}</Prism>
        </main>
    </>
}
