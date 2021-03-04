import React from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { sentenceCase } from '@utils/sentence-case';

export const Breadcrumbs: React.FC = () => {
  const router = useRouter();

  const breadcrumbs: string[] = ['Home', ...router.asPath.split('/').splice(1)];

  return (
    <>
      <nav className="my-6 text-black" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          {breadcrumbs.map((slug, i) => (
            <>
              <li className="flex items-center">
                <Link
                  href={`/${breadcrumbs.slice(1, i + 1).join('/')}`}
                  passHref
                >
                  <a
                    className={`${
                      i === breadcrumbs.length - 1 && 'font-light text-gray-700'
                    }`}
                  >
                    {sentenceCase(slug)}
                  </a>
                </Link>

                {i < breadcrumbs.length - 1 && (
                  <svg
                    className="fill-current w-3 h-3 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                )}
              </li>
            </>
          ))}
        </ol>
      </nav>
    </>
  );
};
