'use client';

import { AppBar, Tabs, Tab } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Home', href: '/' },
  { label: 'Course', href: '/course' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Exercises', href: '/exercises' },
  { label: 'Homework', href: '/homework' },
  { label: 'Practical', href: '/practical' },
  { label: 'Project', href: '/project' },
];

export default function NavigationTabs() {
  const pathname = usePathname();
  const current = tabs.findIndex(tab => tab.href === pathname);
  return (
    <AppBar position="static">
      <Tabs value={current === -1 ? false : current} variant="scrollable" scrollButtons="auto">
        {tabs.map(tab => (
          <Tab key={tab.href} label={tab.label} component={Link} href={tab.href} />
        ))}
      </Tabs>
    </AppBar>
  );
}
