import { AddressInfoCard } from "@/components/profile/address-info";
import { ConnectionInfoCard } from "@/components/profile/connection-info";
import { PersonalInfoCard } from "@/components/profile/personal-info";
import { TechnicalInfoCard } from "@/components/profile/technical-info";
import { profileData } from "@/data/profile";

export default function ProfilePage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="mt-1 text-muted-foreground">
          View and manage your account information.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          {profileData.personal.fullName}
        </h2>
        <p className="text-muted-foreground">
          Customer ID: {profileData.connection.customerId}
        </p>
      </div>

      <PersonalInfoCard personal={profileData.personal} />

      {/* Connection Information */}
      <ConnectionInfoCard connection={profileData.connection} />

      {/* Technical Information */}
      <TechnicalInfoCard technical={profileData.technical} />

      {/* Address */}
      <AddressInfoCard address={profileData.address} />
    </div>
  );
}
