// toolbar.js

import { DraggableNode } from './draggableNode';
import { Input } from './components/ui/input';
import {
    IconPin,
    IconChevronRight
} from '@tabler/icons-react';

export const PipelineToolbar = () => {
    const nodes = {
        start: [
            { type: 'custom-input', label: 'Input' },
            { type: 'custom-output', label: 'Output' },
            { type: 'text', label: 'Text'},
        ],
        ai: [
            { type: 'openai', label: 'OpenAI' },
            { type: 'semantic-search', label: 'Semantic Search' }
        ],
        data: [
            { type: 'google-search', label: 'Google Search' }
        ]
    }

    return (
        <div className='px-3 py-3 flex flex-col gap-3 bg-background-2 border-r border-border-2/80 h-full shrink-0'>
            <div className='flex flex-row gap-2 items-center mb-6'>
                <Input
                    className='flex-1 bg-black/30'
                    variant='search'
                    placeholder='Search nodes...'
                    icon='search'
                />
                <IconPin className='h-7 w-7 text-icon-2 shrink-0 cursor-pointer hover:text-foreground/60' />
            </div>
            {Object.entries(nodes).map(([group, items]) => (
                <div className='' key={group}>
                    <p className='text-sm font-normal text-foreground/80 px-2 py-2 bg-hover/40 rounded-[6px]'>
                        <IconChevronRight className='inline h-4 w-4 mr-1' />
                        {group}
                    </p>
                    <div key={group} className='grid grid-cols-2 gap-2 py-5'>
                        {items.map((item) => (
                            <DraggableNode key={item.type} type={item.type} label={item.label} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
