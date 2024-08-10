import { Button } from '@/components/ui/button';
import UserInformation from '@/components/UserInformation';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
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
