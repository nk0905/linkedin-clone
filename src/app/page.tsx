import { Button } from '@/components/ui/button';
import UserInformation from '@/components/UserInformation';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid">
      <section>
        {/* userInformation */}
        <UserInformation />
      </section>

      <section>
        {/* PostForm */}
        {/* PostFeed */}
      </section>

      <section>{/* Widget */}</section>
    </div>
  );
}
