export const defaultKeywords = [
    'pyvisa',
    'documentation',
    'docs',
    'test and measurement',
    'python',
    'visa',
    'instrument control',
    'laboratory automation',
    'gpib',
    'serial',
    'usb',
    'measurement instruments',
    'scientific instruments',
    'tofupilot'
]

export const defaultOpenGraph = {
    siteName: 'PyVISA',
    title: 'PyVISA Examples and Documentation',
    description: 'Control your measurement instruments with Python using PyVISA.',
    url: 'https://pyvisa.com',
    locale: 'en_US',
    type: 'website',
}

export const defaultMetadata = {
    title: {
        template: '%s - PyVISA Examples and Documentation',
        default: 'PyVISA Examples and Documentation',
    },
    description:
        'Examples and Documentation for PyVISA, a Python package for controlling measurement instruments.',
    authors: [{ name: 'TofuPilot Team', url: 'https://tofupilot.com' }],
    keywords: defaultKeywords,
    openGraph: defaultOpenGraph,
}