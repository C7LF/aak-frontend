import React from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { sentenceCase } from '@utils/sentence-case';

import ChevronRightIcon from '../public/assets/right-chevron.svg';

export const Breadcrumbs: React.FC = () => {
  const router = useRouter();

  const breadcrumbs: string[] = ['Home', ...router.asPath.split('/').splice(1)];

  return (
    <>
      <nav className="my-6 text-gray-600" aria-label="Breadcrumb">
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
                  <img
                    src={ChevronRightIcon}
                    className="fill-current w-3 h-3 mx-3"
                    alt="right icon"
                  />
                )}
              </li>
            </>
          ))}
        </ol>
      </nav>
    </>
  );
};
